import { FC } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
// import { IOption,} from './app.interface'
// import ReactSelect from 'react-select'
// import { getValue, options } from './App'

 interface IShippingFields {
	email: string
	name: string
	// address: IAddress
}
const ShippingForm = () => {
    const {register, handleSubmit} = useForm<IShippingFields>()

	const onSubmit: SubmitHandler<IShippingFields> = data => {
		console.log(data,"input")
		// reset()
	}

	return (
		<div style={{ textAlign: 'center' }}>
			
		</div>
	)
}

export default ShippingForm