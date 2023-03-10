import { NameStates } from "../constants/NameStates"

export function addBannerUrl(nameCountry: string) {
  const mapper = NameStates.map(state => {
    if (state.name === nameCountry) return (
      <img src={state.bannerUrl} className="w-full h-full" />
    )
  })

  return mapper

}