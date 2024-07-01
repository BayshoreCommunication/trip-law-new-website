import { Spinner } from '@nextui-org/react';
import './globals.css';

export default function Loading() {
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      <Spinner
        label='Loading...'
        color='spinner'
        labelColor='#1B2639'
        size='lg'
      />
    </div>
  );
}
