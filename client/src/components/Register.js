import React ,{useState,useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {userRegister} from '../actions/reg-action'
import FormControl from '@material-ui/core/FormControl'
import {Input,InputLabel} from '@material-ui/core'

const AdduserModal=({userRegister})=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('')
    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="username">
                    Username
                </InputLabel>
                <Input

                type="text"
                name="username"
                value={username}
                onChange={e=>setUsername(e.target.value)}
                placeholder="Write your name"

                />
                <span style={{ color: "red" }}>{this.state.nameError}</span>


                <InputLabel htmlFor="email">Email Address</InputLabel>
								<Input
									type="text"
									name="email"
									value={email}
									onChange={e=>setEmail(e.target.value)}
									required
									placeholder="Write Your Valid Email"
									// error={this.state.eError}
								/>
            </FormControl>
            
        </div>
    )
}
AdduserModal.propTypes={
    userRegister:PropTypes.func.isRequired
}
export default connect(null,{userRegister})(AdduserModal)