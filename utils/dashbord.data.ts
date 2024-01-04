import type { IDashbordLinks } from "~/types/dashbord.types";

export const DASBOARDLINKS:IDashbordLinks[] = [
  {
    name: 'Dashboard',
    icon: 'lucide:layout-dashboard',
    link: '/dashbord',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10'
  },
  {
    name: 'Conversation',
    icon: 'lucide:message-square',
    link: '/conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10'
  },
  {
    name: 'image',
    icon: 'lucide:image',
    link: '/image',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10'
  },
  {
    name: 'video',
    icon: 'lucide:video',
    link: '/video',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    name: 'music',
    icon: 'lucide:music',
    link: '/music',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  },
  {
    name: 'code',
    icon: 'lucide:code',
    link: '/code',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  }
]