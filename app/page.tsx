"use client"
import React from 'react';
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <div className='flex flex-col'>
      <button className="border-2 m-2" onClick={() => router.push('/video1')}>Go to video1</button>
      <button className="border-2 m-2" onClick={() => router.push('/video2')}>Go to video2</button>
    </div>
  );
};
