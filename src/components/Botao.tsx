interface BotaoProps{
    children: any,
    className?: string,
    color?: "green" | "blue" | "gray",
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    const cor = props.color ?? "gray";
    return(
        <button className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${props.className}`} onClick={props.onClick}>{props.children}</button>
    )
}