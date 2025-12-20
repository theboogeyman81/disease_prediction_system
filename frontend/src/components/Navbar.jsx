import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className='bg-blue-600 p-4'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <Link to='/' className='text-white text-xl font-bold'>
                    Disease Prediction System
                </Link>
                <div className='flex gap-4'>
                    <Link to='/' className='text-white hover:text-gray-200'>
                        Home
                    </Link>
                    <Link to='/models' className='text-white hover:text-gray-200'>
                        Models
                    </Link>
                    <Link to='/about' className='text-white hover:text-gray-200'>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}