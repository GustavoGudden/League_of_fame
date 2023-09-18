'use client';
import { ComponentProps } from 'react';

type buttonProps = ComponentProps<'button'>;

export function Button(props: buttonProps) {
  return <button className="rounded-[7px] bg-white px-[15px] py-[8px] text-[12px] font-bold text-gray-500 drop-shadow-white" {...props} />;
}
