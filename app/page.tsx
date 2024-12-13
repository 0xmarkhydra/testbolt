"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Book, FileText, MessageSquare, BookOpen, Files, User2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="HSA Education" width={40} height={40} />
            <span className="text-xl font-bold text-orange-500">HSA Education</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="flex items-center gap-2">
                <User2 className="h-5 w-5" />
                Đăng nhập
              </Button>
              <Button variant="ghost">
                <Book className="h-5 w-5 mr-2" />
                Khoá học
              </Button>
              <Button variant="ghost">
                <FileText className="h-5 w-5 mr-2" />
                Đề thi
              </Button>
              <Button variant="ghost">
                <MessageSquare className="h-5 w-5 mr-2" />
                Hỏi đáp
              </Button>
              <Button variant="ghost">
                <BookOpen className="h-5 w-5 mr-2" />
                Sách
              </Button>
              <Button variant="ghost">
                <Files className="h-5 w-5 mr-2" />
                Tài liệu
              </Button>
            </nav>
            <Button variant="default" className="bg-green-600 hover:bg-green-700">
              Đăng nhập
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image 
            src="/banner.jpg" 
            alt="HSA Education Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Bạn đang tìm kiếm gì?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-12">Theo dõi thông tin kỳ thi ở đâu?</Button>
            <Button variant="outline" className="h-12">Cách đăng ký khoá học</Button>
            <Button variant="outline" className="h-12">Tài liệu ôn thi HSA</Button>
          </div>
        </div>

        {/* Teacher Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Đội ngũ giáo viên chất lượng</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src={`/teacher${i}.jpg`} 
                    alt={`Teacher ${i}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold">Thầy Nguyễn Văn A</h3>
                  <p className="text-sm text-gray-600">Giáo viên Toán</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}