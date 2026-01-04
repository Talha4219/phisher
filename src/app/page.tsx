import { Header } from "@/components/header";
import { PostContent } from "@/components/post-content";
import { RelatedPosts } from "@/components/related-posts";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarInset,
} from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar side="right">
        <SidebarContent className="p-4">
          <RelatedPosts />
        </SidebarContent>
      </Sidebar>
      <div className="flex w-full flex-col">
        <Header />
        <SidebarInset>
          <main className="p-4 md:p-8">
            <PostContent />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
