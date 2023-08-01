interface Heading {
  content: string;
  fontSize: string;
  fontWeight: string | number;
  margin: number | string
}

export const TitleComponent = (props: Heading) => {
  return (
    <h1
      style={
        { textAlign: 'center', color: "#353535", fontWeight: props.fontWeight, fontSize: props.fontSize, margin: props.margin }
      }>
      {props.content}
    </h1>
  )
}