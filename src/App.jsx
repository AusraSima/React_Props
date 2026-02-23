import './App.css'
import Title from './components/Title'
import Price from './components/Price'
import OnSale from './components/OnSale'

const data = {
      title: "Laptop",
      price: 500,
      onSale: true
    }

function App() {  
  return (
    <>
      <Title data={data} />
      <Price data={data} />
      <OnSale data={data} >
        <p className='text-red-500 font-extrabold text-4xl'>SALE!</p>
      </OnSale >
    </>
  )
}

export default App
