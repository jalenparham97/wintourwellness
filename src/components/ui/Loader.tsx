'use client';

import { IconLoader2 } from '@tabler/icons-react';

import { cn } from '@/utils/tailwind-helpers';

export interface LoaderProps {
  className?: string;
  size?: string | number;
}

export function Loader({ className, size }: LoaderProps) {
  return <IconLoader2 className={cn('animate-spin', className)} size={size} />;
}
