import React from 'react' 
import { ResizableHandle , ResizablePanel , ResizablePanelGroup } from '@/components/ui/resizable' 
import { TooltipProvider } from '@radix-ui/react-tooltip'
 
 const Mail = () => {
    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup direction='horizontal' onLayout={(sizes: number[]) =>{
                console.log(sizes)
            }} className='items-stretch h-full min-h-screen'>
                <ResizablePanel minSize={20} maxSize={40} className='bg-red-500'></ResizablePanel>

        
            </ResizablePanelGroup>
        </TooltipProvider>
    )
 }

 export default Mail