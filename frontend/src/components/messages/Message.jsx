import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={"https://www.shutterstock.com/image-vector/talk-bubble-speech-icon-blank-260nw-1415472902.jpg"} />
                </div>
            </div>
            <div className={`chat-bubble text-white text-white bg-blue-500 pb-2`}>Hi! what is upp?</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
        </div>
    )
}

export default Message
