import React from 'react'
import { BsFillCreditCardFill, BsFacebook, BsInstagram, BsStarFill } from "react-icons/bs"
import { HiSpeakerphone, HiMail } from "react-icons/hi"

const scores = [
    {
        id: 1,
        title: "1 Punto por $1",
        icon: <BsFillCreditCardFill className="text-3xl text-brand-primary" />
    },
    {
        id: 2,
        title: "200.000 Puntos",
        icon: <HiSpeakerphone className="text-3xl text-brand-primary" />
    },
    {
        id: 3,
        title: "5.000 Puntos",
        icon: <BsFacebook className="text-3xl text-brand-primary" />
    },
    {
        id: 4,
        title: "10.000 Puntos",
        icon: <BsInstagram className="text-3xl text-brand-primary" />
    },
    {
        id: 5,
        title: "10.000 Puntos",
        icon: <HiMail className="text-3xl text-brand-primary" />
    },
    {
        id: 6,
        title: "10.000 Puntos",
        icon: <BsStarFill className="text-3xl text-brand-primary" />
    },
]

const AccountScores = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mb-11'>
        {scores.map(score => (
            <div 
                key={score.id}
                className='flex flex-col items-center justify-center py-10 px-2.5 bg-brand-gray-light rounded-20'
            >
                <div className='flex items-center justify-center bg-white w-15 h-15 rounded-full mb-10'>
                    {score.icon}
                </div>
                <div>
                    <p>
                    {score.title}
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default AccountScores
