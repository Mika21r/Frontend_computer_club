import { useForm } from 'react-hook-form';
import "./signup.css";

import {Context} from "../../main";
import { useContext, useState } from 'react';

const SignUp = ({setShowModal}) => {
    const [signInResult, setSignInResult] = useState("")
    const {store} = useContext(Context);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        
        await store.registration(data.userName, data.phoneNumber, data.email, data.password);
        if(store.isAuth) {
            console.log("uraaa")
            setShowModal(false);
            
            reset();
        }
        
      };
    return ( 
        <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className='sign__in__title'>Регистрация</h2>
            <div className="form__group">
                    <label className="signup__label">Имя</label>
                    <input 
                        placeholder="Имя пользователя" 
                        {...register("userName", {
                            required: "Это обязательное поле",
                            minLength : {
                                value: 3,
                                message: "Должно содержать 3 или более символов"
                            },
                            maxLength: {
                                value: 10,
                                message: "Должно содержать 10 или менее символов"
                            }
                        })}
                    />
                    {errors?.userName && <p className="signup__error">{errors?.userName?.message}</p>}
                </div>
                <div className="form__group">
                    <label className="signup__label" >Номер телефона</label>
                    <input 
                        placeholder="Номер телефона" 
                        {...register("phoneNumber", {
                            required: "Это обязательное поле",
                            pattern: {
                                value:  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                                message: 'Не корректный номер телефона',
                            },
                        })}
                    /> 
                   
                    {errors?.phoneNumber && <p className="signup__error">{errors?.phoneNumber?.message}</p>}
                    
                </div>
                <div className="form__group">
                    <label className="signup__label">Email</label>
                    <input 
                        placeholder="Email" 
                        {...register("email", {
                            required: "Это обязательное поле",
                            pattern: {
                                value:  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                message: 'Не корректный email',
                            },
                        })}
                    />
                    {errors?.email && <p className="signup__error">{errors?.email?.message}</p>}                  
                </div>
                <div className="form__group">
                    <label className={"signup__label"}>Пароль</label>
                    <input 
                        placeholder="Пароль"
                        {...register("password", {
                            required: "Это обязательное поле",
                            pattern: {
                                value:  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                message: 'Пароль не соответсвует требованиям',
                            },
                        })} 
                    />
                    
                    {errors?.password && <p className="signup__error">{errors?.password?.message}</p>}

                </div>
                <div className="form__group">
                    <label className="signup__label">Подтверждение пароля</label>
                    <input 
                        placeholder="Подтвердить"
                        {...register("confirmPass", {
                            required: "Это обязательное поле",
                            pattern: {
                                value:  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                message: 'Пароль не соответсвует требованиям',
                            },
                            validate: (val) => {
                                if (watch('password') != val) {
                                  return "Пароли не совпадают";
                                }
                            },
                        })} 
                    />
                   
                    {errors?.confirmPass && <p className="signup__error">{errors?.confirmPass?.message}</p>}

                </div>
            <button className='signup__btn'>Зарегистрироваться</button>
        </form> 
    );
}
 
export default SignUp;