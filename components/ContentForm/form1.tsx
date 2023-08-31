import React from 'react'
import CaptionGen from '@/pages/home/VideoGen';
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import AddCircle from "@mui/icons-material/AddCircleOutlineTwoTone";
import Cancel from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import GPTResponseVideo from "@/components/GPTResponseVideo";
import { useAtom } from "jotai";
import { updateTokens, readTokens, getUserToken } from "../../auth";
import { responseAtom } from "@/utils/store";
import { auth } from "@/firebase";
import { Modal, Box } from "@mui/material";
import { StyleModal } from "@/components/modalStyle";
import PopUpCard from "@/components/PopUpCard";
type MainSelectorProps = {
    title: string; // Adjust the type according to your use case
  };

  const options = [
    "Conversational",
    "Enthusiastic",
    "Funny",
    "Professional",
    "Describe a tone",
  ];
  
  export const disabled = (...args: any[]) => {
    return args.some(
      (arg) =>
        (typeof arg === "string" && arg?.trim().length === 0) ||
        (typeof arg === "object" && arg?.length === 0)
    );
  };
  export default function Form1({title}:MainSelectorProps) {
  
  
    const [value, setValue] = useState<string | null>();
    const [keywords, setKeywords] = useState<string[]>([]);
    const [word, setWord] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [postAboutCount, setPostAboutCount] = useState(0);
    const [targetAudienceCount, setTargetAudienceCount] = useState(0);
    const [targetAudience, setTargetAudience] = useState("");
    const [input, setInput] = useState("");
    const [_response, setResponse] = useAtom(responseAtom);
    const [loading, setLoading] = useState(false);
    let token: number = 20;
    const user = auth.currentUser;
    const router = useRouter();
    const [getToken, setgetToken] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    useEffect(() => {
      // Set the state to null on page load
      setResponse("");
    }, [setResponse]);
  
    const handleKeyword = (event: ChangeEvent<HTMLInputElement>) => {
      setWord(event.target.value);
    };
  
    const addKeyword = () => {
      if (word.trim() !== "") {
        setKeywords((prevKeywords) => [...prevKeywords, word]);
        setWord("");
      }
    };
  
    const removeKeyword = (index: number) => {
      setKeywords((prevKeywords) => prevKeywords.filter((_, i) => i !== index));
    };
  
    const KeywordsComp = () => {
      return (
        <div className="flex flex-row">
          {keywords.map((word, index) => (
            <div
              key={index}
              className="mx-1 px-2 border border-gray-300 bg-white flex-row flex"
            >
              <Cancel
                className="bg-black w-0.5 h-0.5"
                onClick={() => removeKeyword(index)}
              />
              <p className="text-gray-800">{word}</p>
            </div>
          ))}
        </div>
      );
    };
  
    const TextInput = () => {
      return (
        <input
          className="w-full px-2 py-2 rounded-lg border border-gray-300 text-gray-500 mt-2"
          placeholder="Describe a tone"
          type="text"
        ></input>
      );
    };
  
  
  
    const prompt = `Generate ${title} about ${input} and make them in a single sentence`;
  
    const handlePostAboutChange = (event: ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value;
      const count = value.length;
      setPostAboutCount(count);
  
      if (count > 800) {
        value = value.slice(0, 800);
        setPostAboutCount(800);
      }
  
      event.target.value = value;
    };
  
    const handleTargetAudienceChange = (event: ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value;
      const count = value.length;
      setTargetAudienceCount(count);
  
      if (count > 200) {
        value = value.slice(0, 200);
        setTargetAudienceCount(200);
      }
  
      event.target.value = value;
    };
  
    const generateResponse = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
      if (disabled(input)) return;
      setLoading(true);
      const tk = await getUserToken(user);
      if (Number(tk) < token) {
        handleOpen();
        setLoading(false);
        return;
      } else {
        let usertk: number = Number(tk) - Number(token);
        // e.preventDefault();
        setResponse("");
  
        await updateTokens(user, usertk);
        const res = await fetch("/api/promptChatGPT", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: prompt,
          }),
        });
  
        if (!res.ok) throw new Error(res.statusText);
  
        const data = res.body;
  
        if (!data) return;
  
        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;
  
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          const chunkValue = decoder.decode(value);
          setResponse((prev) => prev + chunkValue);
        }
        setLoading(false);
      }
    };
  
    return (
      <div className="  flex flex-col md:flex-row	justify-center items-center w-full h-full">
        <div className="w-full h-screen flex dark:bg-[#232529] bg-[#F2F2F2] px-10 py-16 flex-col">
          <h1 className=" font-sans text-2xl font-bold text-blue">
            Generate {title} 
          </h1>
          <h3 className="text-sm mt-2">
            Optimize your content for greater visibility and higher engagement.
          </h3>
          <form onSubmit={(e) => e.preventDefault()} className="my-4">
            <div className="relative">
              <h3 className=" text-lg my-3 font-medium dark:text-[#A7A7A7]">
                What&apos;s your post about? <span className='text-red-500'>*</span>
              </h3>
              <input
                className="w-full px-2 py-2 rounded-lg  dark:bg-[#1B1D21]"
                type="text"
                placeholder="gaming, fashion, animals etc."
                onChange={(e) => {
                  setInput(e.target.value), handlePostAboutChange(e);
                }}
              ></input>
              <p className="text-gray-700 text-xs absolute right-0 top-[18px]">
                {postAboutCount}/800
              </p>
            </div>
  
  
           
           
  
            <button
              disabled={disabled(input)}
              onClick={generateResponse}
              className={`w-full h-10 bg-black mt-10 rounded-lg bg-gradient-to-l from-[#009FFD] to-[#2A2A72] ${
                disabled(input) &&
                "cursor-not-allowed"
              }`}
            >
              <h1 className="text-white">
                {" "}
                {loading ? "Genarating..." : "Generate (20 tokens)"}
              </h1>
            </button>
          </form>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={StyleModal}>
            <PopUpCard></PopUpCard>
          </Box>
        </Modal>
        {/* <div className=" h-screen w-screen flex bg-white">
          {/* <GPTResponseVideo></GPTResponseVideo> */}
        {/* </div> */}
      </div> 
    );
  }
  
