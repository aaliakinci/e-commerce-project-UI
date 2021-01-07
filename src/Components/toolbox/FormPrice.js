import React from 'react'
 
export default function FormPrice({handleSubmit,handleChange,label1,label2,input1,input2,btnText}) {
	return (
		<form className="my-3" onSubmit={handleSubmit}>
				<label className="col-form-label text-center w-100">Fiyat Aralığı</label>
				<div className="form-group">
					<label className="col-form-label">{label1}</label>
					<input id={input1} className="form-control" name={input1} ref={handleChange}/>
					<label className="col-form-label">{label2}</label>
					<input id={input2} className="form-control my-1" name={input2} ref={handleChange}/>
				</div>
				<button type="submit" className="btn btn-primary float-right">{btnText}</button>
			</form>
	)
}
