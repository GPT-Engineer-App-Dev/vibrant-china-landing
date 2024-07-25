import React from 'react';
import { Clock, Book, Landmark, ScrollText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ChinaHistoryLandingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Exploring China's Rich History</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" /> Ancient China
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the origins of Chinese civilization, from the legendary Xia dynasty to the Zhou period.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Landmark className="mr-2" /> Imperial China
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore the grand empires of the Qin, Han, Tang, Song, Ming, and Qing dynasties.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ScrollText className="mr-2" /> Modern Era
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn about China's transformation in the 19th and 20th centuries, including the Republican era and the founding of the People's Republic.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="mr-2" /> Cultural Legacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Delve into China's philosophical traditions, artistic achievements, and technological innovations that have shaped world history.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold text-center mb-6">Key Historical Events</h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
            <div className="font-bold text-slate-900">221 BCE</div>
            <div className="text-slate-500">Qin Shi Huang unifies China, becoming the first emperor</div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
            <div className="font-bold text-slate-900">105 CE</div>
            <div className="text-slate-500">Invention of paper during the Han Dynasty</div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
            <div className="font-bold text-slate-900">1271-1368 CE</div>
            <div className="text-slate-500">The Mongol-led Yuan Dynasty rules China</div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
            <div className="font-bold text-slate-900">1912</div>
            <div className="text-slate-500">End of imperial rule, establishment of the Republic of China</div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
            <div className="font-bold text-slate-900">1949</div>
            <div className="text-slate-500">Founding of the People's Republic of China</div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold mb-4">Explore China's Historical Landmarks</h2>
        <img src="/placeholder.svg" alt="China's Historical Landmarks" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </div>
    </div>
  );
}