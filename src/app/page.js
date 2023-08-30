'use client'
import DynamicContent from "@/components/DynamicContent";
import MySpinner from "@/components/Spinner";
import React, { Suspense } from 'react';

export default function Home() {
 
  return (    
    <div className="h-screen flex justify-center items-center">
      <Suspense fallback={<MySpinner />}>
        <DynamicContent />
      </Suspense>
    </div>
  )
}
