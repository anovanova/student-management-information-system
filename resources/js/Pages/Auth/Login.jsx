import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Form from '@/Components/Forms/Form'
import PrimaryButton from '@/Components/Buttons/PrimaryButton'
import SecondaryButton  from '@/Components/Buttons/SecondaryButton';
import TextInput from '@/Components/Inputs/TextInput';

export default function Login() {
    return (
       <div class="h-screen w-screen grid justify-center items-center">
            <Head title="Login"/>
            <Form className="h-96 w-80 p-8 grid gap-4 shadow-2xl rounded-lg" titleSize="text-2xl" title="Login">
                <div class="row-span-3 grid gap-4 my-auto">
                    <div>
                        <TextInput placeholder="Email">

                        </TextInput>
                    </div>
                    <div>
                        <TextInput placeholder="Password" type="password">
                                
                        </TextInput>
                    </div>
                </div>
                <div class='grid grid-rows-1 grid-cols-2 p'>
                    <div class='m-auto'>
                        <SecondaryButton className="ms-4">
                            Sign up
                        </SecondaryButton>
                    </div>
                    <div class='m-auto'>
                        <PrimaryButton className="ms-4">
                            Login
                        </PrimaryButton>
                    </div>


                </div>
            </Form>
       </div>
    );
}
