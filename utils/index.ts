import type { IDashbordLinks } from "@/types/dashboard.types";

export const DASHBORDLINKS:IDashbordLinks[] = [
  {
    name: 'Dashboard',
    icon: 'lucide:layout-dashboard',
    link: '/dashbord',
    color: 'text-sky-500'
  },
  {
    name: 'Conversation',
    icon: 'lucide:message-square',
    link: '/conversation',
    color: 'text-violet-500'
  },
  {
    name: 'image',
    icon: 'lucide:image',
    link: '/image',
    color: 'text-pink-500'
  },
  {
    name: 'video',
    icon: 'lucide:video',
    link: '/video',
    color: 'text-orange-500'
  },
  {
    name: 'music',
    icon: 'lucide:music',
    link: '/music',
    color: 'text-emerald-500'
  },
  {
    name: 'code',
    icon: 'lucide:code',
    link: '/code',
    color: 'text-green-500'
  },
  {
    name: 'settings',
    icon: 'lucide:settings',
    link: '/settings',
    color: 'text-green-500'
  }
]