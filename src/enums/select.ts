
type Options = {
  optionValue: boolean;
  label: string;
}[]


export const isAvailableOptions:Options = [
  { optionValue: true, label: "En stock" },
  { optionValue: false, label: "En rupture" },
]

export const isPublicisedOptions:Options = [
  { optionValue: false, label: "Sans pub" },
  { optionValue: true, label: "Avec pub" },
]
