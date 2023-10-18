<template>
    <div 
        data-tauri-drag-region 
        :class="`flex justify-between w-[100%] select-none z-100 ` + (props.bgColor ? ('bg-[' + props.bgColor + ']') : 'bg-[#000]') + ' ' + (props.textColor ? ('text-[' + props.textColor + ']') : 'text-white')"
    >
        <div 
            data-tauri-drag-region 
            class='px-2 py-1 flex flex-row items-center justify-center'
        >
            {{ props.icon }}
            {{ props.title }}
        </div>
        <ul class='flex'>
            <li 
                class='hover:bg-gray-700 px-3 py-1 cursor-pointer flex items-center justify-center' 
                @click="minimizeWindow"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="2" y="12" width="12" height="2" fill=""/>
                </svg>
            </li>
            <li 
                class='hover:bg-gray-700 px-3 py-1 cursor-pointer flex items-center justify-center' 
                @click="maximizeWindow"
            >
                <div v-if="windowStore.getWindowMaxmized == true" >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="" stroke="currentColor" stroke-width="1">
                        <rect x="2.5" y="4.5" width="9" height="9" stroke=""/>
                        <rect x="13" y="2" width="1" height="10" fill=""/>
                        <rect x="4" y="2" width="10" height="1" fill=""/>
                        <rect x="4.25" y="3.25" width="0.5" height="0.5" stroke="" stroke-width="0.5"/>
                        <mask id="path-5-inside-1_20_2" fill="">
                        <path d="M12 11H13V12H12V11Z"/>
                        </mask>
                        <path d="M12 11V10H11V11H12ZM13 11H14V10H13V11ZM13 12V13H14V12H13ZM12 12H11V13H12V12ZM12 12H13V10H12V12ZM12 11V12H14V11H12ZM13 11H12V13H13V11ZM13 12V11H11V12H13Z" fill="" mask="url(#path-5-inside-1_20_2)"/>
                    </svg>
                </div>
                <div v-else>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                        <rect x="3" y="3" width="10" height="10" stroke="" stroke-width="2"/>
                    </svg>
                </div>
            </li>
            <li 
                class='hover:bg-[#D41324] px-3 py-1 cursor-pointer group flex items-center justify-center' 
                @click="closeWindow"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { appWindow } from '@tauri-apps/api/window'
    import { useWindowStore } from '../../store/windowStore'

    const props = defineProps({
        title: String,
        bgColor: String,
        textColor: String,
        buttonHoverColor: String,
        icon: Image
    })

    const minimizeWindow = async () => {
        await appWindow.minimize();
    }

    const maximizeWindow = async () => {
        await appWindow.toggleMaximize();
    }
    
    const closeWindow = async () => {
        await appWindow.close();
    }

    const windowStore = useWindowStore()
</script>