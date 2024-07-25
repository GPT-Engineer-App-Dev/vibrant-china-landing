import React from 'react';
import { Clock, Book, Landmark, ScrollText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Timeline, TimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@/components/ui/timeline';

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
      
      <Timeline className="mb-12">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="font-bold">221 BCE</h3>
            <p>Qin Shi Huang unifies China, becoming the first emperor</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="font-bold">105 CE</h3>
            <p>Invention of paper during the Han Dynasty</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="font-bold">1271-1368 CE</h3>
            <p>The Mongol-led Yuan Dynasty rules China</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="font-bold">1912</h3>
            <p>End of imperial rule, establishment of the Republic of China</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="font-bold">1949</h3>
            <p>Founding of the People's Republic of China</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Explore China's Historical Landmarks</h2>
        <img src="/placeholder.svg" alt="China's Historical Landmarks" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </div>
    </div>
  );
}