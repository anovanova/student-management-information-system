import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth }) {
    const [showDrawer, setShowDrawer] = useState(false)
    function toggleDrawer(){
        setShowDrawer((past) => {return !past});
    }
    return (
        <div className='flex flex-col h-screen'>
            <Head title="Dashboard" />
            <nav className='navbar'>
                <div className='flex-1'>
                    <button className="btn btn-square btn-ghost" onClick={() => toggleDrawer()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div>
                        <h1>Admin</h1>
                    </div> 
                </div>
                
                <div className='m-4'>
                    <button>Home</button>
                </div>
            </nav>
            <div className='flex h-full'>
            {
                showDrawer ? (
                    <div className='flex flex-col w-72 border-r-2 p-4'>
                        <div className='flex flex-col gap-4'>
                            <button>Create User</button>
                            <button>Students</button>
                            <button>Faculties</button> 
                        </div>
                        <div className='self-end w-full mt-auto'>
                            <button className='btn btn-error w-full'>Logout</button>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
            <div>
                <div className='grid grid-cols-2 gap-4 p-4'>
                    <div class="card bg-base-100 w-96 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Total Students Enrolled:</h2>
                            <h2 className='font-bold text-4xl'>500</h2>
                        </div>
                    </div>
                    <div class="card bg-base-100 w-96 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Total Faculty Members:</h2>
                            <h2 className='font-bold text-4xl'>100</h2>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
        
    );
}