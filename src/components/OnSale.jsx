const OnSale = ({children, data}) => {
    return (
        <>
        {data.onSale && <div>{children}</div>}
        </>       
    )
}

export default OnSale;