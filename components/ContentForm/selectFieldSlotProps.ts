import type { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import type { CSSProperties } from 'react'

/**
 * Builds the `slotProps` for a `TextField` rendered inside an `Autocomplete`.
 *
 * An explicit `slotProps` replaces the one `renderInput` passes through
 * `{...params}`, so each slot is spread back in — `htmlInput` carries the
 * input's value and change handlers, and dropping it breaks the field.
 */
export const selectFieldSlotProps = (
    params: AutocompleteRenderInputParams,
    labelStyle: CSSProperties,
    inputStyle: CSSProperties
) => ({
    ...params.slotProps,
    inputLabel: { ...params.slotProps.inputLabel, style: labelStyle },
    input: { ...params.slotProps.input, style: inputStyle },
})
