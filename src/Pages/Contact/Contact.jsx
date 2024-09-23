import React, { useState } from 'react'
import modules from './Contact.module.css'
import iconLocation from '/image/mdi--location.svg'
import iconPhone from '/image/ph--phone-fill.svg'
import iconTime from '/image/icon-park-solid--time.svg'
import arrowicon from '/image/weui--arrow-filled.svg'
import mainimg from '/image/bg.png'
import mainimg2 from '/image/bg2.png'
import Logo from '/image/Meubel House_Logos-05.png'
import * as yup from "yup"



function Contact() {

    const [Arrayoferrors, setArrayOfErrors] = useState({})


    const [formData, setFormData] = useState({
        Yourname: "",
        email: "",
        message: "",
        Subject: "",
    })



    const userSchema = yup.object().shape({
        Yourname: yup.string().required().min(4),
        email: yup.string().email().required(),
        message: yup.string().required(),
        Subject: yup.string().required(),

    })


    function Handleonsubmit(event) {
        console.log(formData)
        testvalidation();
        event.preventDefault();

    }






    async function testvalidation() {
        try {
            const response = await userSchema.validate(formData, { abortEarly: false });
            console.log(response)
        } catch (error) {
            var errors = {};
            error.inner.forEach((error) => {
                console.log(`${error.path} : ${error.message}`);
                errors[error.path] = error.message
            });
            setArrayOfErrors(errors);
            console.log(errors)
        }
    }

    function Handleonchange(event) {
        let keyValue = event.target.value;
        const keyName = event.target.name;
        // const type = event.target.type;

        // if (type == "checkbox") {
        //   keyValue = event.target.checked;
        // }

        setFormData({
            ...formData,
            [keyName]: keyValue

        })

    }



    return (
        <section className={modules.section}>
            <div className={modules.image}>
                <img src={mainimg} alt="" className={modules.mainimg} />
                <img src={mainimg2} alt="" className={modules.mainimg2} />
                <div className={modules.over}>
                    <img src={Logo} alt="" />
                    <h1 className={modules.currentpage}>Contact</h1>
                    <div className={modules.textimg}>
                        <h2>Home</h2>
                        <img src={arrowicon} alt="" />
                        <h2 className={modules.text1} >Contact</h2>
                    </div>
                </div>
            </div>
           
            <div className={modules.sec1}>
                {/* <img src={img} alt="" className={modules.img} /> */}
                <div className={modules.heading}>

                    <h2>Get In Touch With Us</h2>
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
            </div>

            <div className={modules.sec2}>

                <div className={modules.leftsec}>
                    <div className={modules.contact}>
                        <img src={iconLocation} alt="" />
                        <div className={modules.info}>
                            <h2>Address</h2>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>


                    </div>

                    <div className={modules.contact}>
                        <img src={iconPhone} alt="" />
                        <div className={modules.info}>
                            <h2>Phone</h2>
                            <p>Mobile: +(84) 546-6789
                                Hotline: +(84) 456-6789</p>

                        </div>

                    </div>


                    <div className={modules.contact}>
                        <img src={iconTime} />
                        <div className={modules.info}>
                            <h2>Working Time</h2>
                            <p>Monday-Friday: 9:00 - 22:00
                                Saturday-Sunday: 9:00 - 21:00</p>
                        </div>

                    </div>


                </div>
                <div className={modules.rightsec}>

                    <form onSubmit={Handleonsubmit}>
                        <div>
                            <div className={modules.input}>
                                <label htmlFor="Yourname">Your name</label>
                                <input
                                    type="text"
                                    placeholder='Abc'
                                    id='yourname'
                                    name='Yourname'
                                    value={formData.Yourname}
                                    onChange={Handleonchange} />

                                {Arrayoferrors.Yourname ? <p className={modules.error}>{Arrayoferrors.Yourname} </p> : null}
                            </div>


                            <div className={modules.input}>
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    placeholder='Abc@def.com'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={Handleonchange} />
                                {Arrayoferrors.email ? <p className={modules.error}>{Arrayoferrors.email}</p> : null}
                            </div>
                            <div className={modules.input}>
                                <label htmlFor="Subject">Subject</label>
                                <input
                                    type="text"
                                    id='subject'
                                    name='Subject'
                                    value={formData.Subject}
                                    onChange={Handleonchange}
                                    placeholder='This is an optional'
                                />
                                {Arrayoferrors.Subject ? <p className={modules.error}>{Arrayoferrors.Subject}</p> : null}
                            </div>


                            <div className={modules.textarea}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Hi! i’d like to ask about"
                                    value={formData.message}
                                    onChange={Handleonchange}
                                ></textarea>
                                {Arrayoferrors.message ? <p className={modules.error}>{Arrayoferrors.message} </p> : null}
                            </div>

                            <button type='submit'>Submit</button>

                        </div>

                    </form>



                </div>


            </div>
        </section>

    )
}
export default Contact