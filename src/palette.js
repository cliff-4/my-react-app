const coolers_palette =
  "https://coolors.co/palette/240115-de3c4b-87f5fb-2f131e-cec3c1" // the first one
  // "https://coolors.co/palette/09017b-8785d9-03005b-da9de6-dddfed" // from me.jpg
  // "https://coolors.co/d1bce3-c49bbb-a1867f-585481-19297c"


let hexList = coolers_palette.split("/").pop().split("-")
let indices = [
  "primary",
  "secondary",
  "tertiary",
  "quarternary",
  "quinternary",
  "senary",
]
let palette = {}
for (let i = 0; i < hexList.length; i++) {
  palette[indices[i]] = '#' + hexList[i]
}


// export default colours
export default palette