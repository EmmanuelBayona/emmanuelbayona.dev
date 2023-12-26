import type { Metadata } from 'next'
import { Input } from 'components/input'
import { MaxWidthWrapper } from 'components/max-width-wrapper'
import { TextArea } from 'components/text-area'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact form for Emmanuel Bayona\'s portfolio',
}

export default function Contact() {

    const sendMessage = async (formData: FormData) => {
        'use server'
        const rawFormData = {
            email: formData.get('email'),
            message: formData.get('message')
        }
        console.log(rawFormData)
    }

    return (
        <MaxWidthWrapper className='mt-24 lg:mt-48 text-white flex justify-center gap-4'>

            <aside className='w-full px-5 lg:px-0 lg:w-1/2'>
                <h1 className='text-2xl md:text-3xl text-center lg:text-left lg:text-4xl mx-auto'>Let&apos;s build something beautiful together.</h1>

                <form className='text-white/70'
                    action={sendMessage}
                >
                    <h2 className='text-lg md:text-xl lg:text-2xl mt-7 lg:mt-10'>Contact Me</h2>
                    
                    <label htmlFor='name' className='block mt-3 lg:mt-5'>Email</label>
                    <Input
                        name='email'
                        id='email'
                        type='email'
                        required
                    />

                    <label htmlFor='message' className='block mt-3 lg:mt-5'>Message</label>
                    <TextArea 
                        name='message'
                        id='message'
                        rows={5}
                        required
                    />

                    <button className='rounded-lg mt-5 lg:mt-7 bg-dark border border-dark-accent w-full py-3'
                        type='submit'
                    >
                        Send
                    </button>
                </form>
            </aside>

            <aside className='w-1/2 hidden lg:block'>

            </aside>
        </MaxWidthWrapper>
    )

}