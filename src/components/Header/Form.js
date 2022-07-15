import "./Form.modules.css";

const Form = () => {
    return (
        <div className = "form child">

		<h1>SIGN UP</h1>

		<div className="form__section">
			<input type="text" id="name" required />
			<label htmlFor="name">Name</label>
		</div>

		<div className="form__section">
			<input type="text" id="lastname" required />
			<label htmlFor="lastname">Lastname</label>
		</div>

		<div className="form__section">
			<input type="password" id="password" required />
			<label htmlFor="password"><i className="fas fa-lock"></i>Password</label>
		</div>

		<div className="form__section">
			<input type="email" id="email" required />	
			<label htmlFor="email">Email</label>		
		</div>

		<div className="form__section">
			<textarea id="message" rows="8" required></textarea>	
			<label htmlFor="message">SEND MESSAGE</label>	
		</div>
		<button type = "submit">SUBMIT</button>	
		
	</div>
    )
}

export default Form;