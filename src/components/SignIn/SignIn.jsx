import { useForm } from 'react-hook-form';
import "./signin.css";

import {Context} from "../../main";
import { useContext, useState } from 'react';

const SignIn = ({setShowModal}) => {
    const [signInResult, setSignInResult] = useState("")
    const {store} = useContext(Context);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        await store.login(data.email, data.password);
        if(store.isAuth) {
            console.log("uraaa")
            setShowModal(false);
            setSignInResult("")
            reset();
        }
        else {
            setSignInResult("Неверный логин или пароль")
        }
      };
    return ( 
        <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className='sign__in__title'>Вход</h2>
            <div className="form__group">
                <label className='signin__label'>Логин</label>
                <input 
                    {...register("email", {
                        required: "Это обязательное поле",
                    })} 
                />
                {errors?.email && <p className='signin__error'>{errors?.email?.message}</p>}
            </div>
            <div className="form__group">
                <label className='signin__label'>Пароль</label>
                <input  
                    {...register("password", {
                        required: "Это обязательное поле",
                    })}  
                />
                {errors?.password ? 
                <p className='signin__error'>{errors?.password?.message}</p>
                :
                <p className='signin__error'>{signInResult}</p>
                }
            </div>
            <button className='signin__btn'>Войти</button>
        </form> 
    );
}
 
export default SignIn;