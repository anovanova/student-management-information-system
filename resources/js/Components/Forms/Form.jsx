import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({title = '', titleSize = '',children, className, ...props}) {
    return (
       <div {...props} class={className}>
            <div class="grid justify-center">
               <h1 class={titleSize}>
                  {title}
               </h1>
               
            </div>
            
            {children}
       </div>
    );
}