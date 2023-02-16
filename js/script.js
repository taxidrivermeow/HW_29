const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

class H3 extends React.Component {
    render() {
        return (
            <h3 className={this.props.class}>{this.props.text}</h3>
        );
    }
}

class Label extends React.Component {
    render() {
        return (
            <label htmlFor={this.props.for} className={this.props.class}>{this.props.text}</label>
        );
    }
}

class Input extends React.Component {
    render() {
        return (
            <input type={this.props.type} className={this.props.class} id={this.props.id} name={this.props.name}/>
        );
    }
}

class Button extends React.Component{
    formSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('form_user');
        const list = document.getElementById('list');
        const li = document.createElement('li');
        const formData = new FormData(form);
        const userInfo = `${formData.get('id')}: Name: ${formData.get('name')}; Nickname: ${formData.get('username')}; Email: ${formData.get('email')};  Phone: ${formData.get('phone')};`;
        li.textContent = userInfo;
        list.append(li);
    }

    render() {
        return (
            <button onClick={this.formSubmit} type={this.props.type} className={this.props.class}>{this.props.text}</button>
        );
    }
}

root.render(
    <div className="container">
        <form className={'card'} id={'form_user'}>
            <H3 class={'card-header'} text={'User Form!'}/>
            <Label for={'id_input'} class={'form-label'} text={'Enter User ID'}/>
            <Input type={'number'} class={'form-control'} id={'id_input'} name={'id'}/>
            <Label for={'name_input'} class={'form-label'} text={'Enter User Name'}/>
            <Input type={'text'} class={'form-control'} id={'name_input'} name={'name'}/>
            <Label for={'nick_input'} class={'form-label'} text={'Enter User Nickname'}/>
            <Input type={'text'} class={'form-control'} id={'nick_input'} name={'username'}/>
            <Label for={'email_input'} class={'form-label'} text={'Enter User Email'}/>
            <Input type={'email'} class={'form-control'} id={'email_input'} name={'email'}/>
            <Label for={'phone_input'} class={'form-label'} text={'Enter User Phone'}/>
            <Input type={'text'} class={'form-control'} id={'phone_input'} name={'phone'}/>
            <br/>
            <Button type={'submit'} class={'btn btn-success'} text={'Send User'}/>
        </form>
        <ul className="card" id="list"></ul>
    </div>
);