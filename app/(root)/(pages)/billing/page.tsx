// import Billing from '@/components/Billing/Billing';
// import BillingTable from '@/components/Billing/BillingTable';
// import React from 'react';

// const Page = () => {
//   return (
//     <div className="flex min-h-screen w-full">
//       {/* Left Side - Billing */}
//       <div className="w-1/2 p-4">
//         <Billing />
//       </div>

//       {/* Right Side - Billing Table */}
//       <div className="w-1/2 p-4">
//         <BillingTable />
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client"

import Billing from '@/components/Billing/Billing';
import BillingTable from '@/components/Billing/BillingTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Table } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-4 md:p-8">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 max-w-[1800px] mx-auto">
        <div className="w-full">
          <div className="sticky top-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Patient Information Form
            </h2>
            <Billing />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Table className="h-6 w-6" />
            Patient Records
          </h2>
          <div className="bg-card rounded-lg shadow-lg">
            <BillingTable />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="form" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Form
            </TabsTrigger>
            <TabsTrigger value="table" className="flex items-center gap-2">
              <Table className="h-4 w-4" />
              Records
            </TabsTrigger>
          </TabsList>
          <TabsContent value="form">
            <Billing />
          </TabsContent>
          <TabsContent value="table">
            <div className="bg-card rounded-lg shadow-lg">
              <BillingTable />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;


// "use client"

// import Billing from '@/components/Billing/Billing';
// import BillingTable from '@/components/Billing/BillingTable';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { FileText, Table } from "lucide-react";

// const Page = () => {
//   return (
//     <div className="space-y-6">
//       {/* Desktop Layout */}
//       <div className="hidden lg:block">
//         <div className="grid lg:grid-cols-2 gap-8 max-w-[1800px] mx-auto">
//           <div className="w-full">
//             <div className="sticky top-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-2 bg-primary/10 rounded-lg">
//                   <FileText className="h-6 w-6 text-primary" />
//                 </div>
//                 <h2 className="text-2xl font-semibold">
//                   Patient Information Form
//                 </h2>
//               </div>
//               <div className="transition-all duration-200 hover:translate-y-[-2px]">
//                 <Billing />
//               </div>
//             </div>
//           </div>
//           <div className="w-full">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-primary/10 rounded-lg">
//                 <Table className="h-6 w-6 text-primary" />
//               </div>
//               <h2 className="text-2xl font-semibold">
//                 Patient Records
//               </h2>
//             </div>
//             <div className="bg-card rounded-xl shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:shadow-xl">
//               <BillingTable />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="lg:hidden">
//         <Tabs defaultValue="form" className="w-full">
//           <TabsList className="grid w-full grid-cols-2 mb-6">
//             <TabsTrigger value="form" className="flex items-center gap-2 py-3">
//               <div className="p-1.5 bg-primary/10 rounded-md">
//                 <FileText className="h-4 w-4 text-primary" />
//               </div>
//               Form
//             </TabsTrigger>
//             <TabsTrigger value="table" className="flex items-center gap-2 py-3">
//               <div className="p-1.5 bg-primary/10 rounded-md">
//                 <Table className="h-4 w-4 text-primary" />
//               </div>
//               Records
//             </TabsTrigger>
//           </TabsList>
//           <TabsContent value="form" className="mt-4">
//             <div className="transition-all duration-200">
//               <Billing />
//             </div>
//           </TabsContent>
//           <TabsContent value="table" className="mt-4">
//             <div className="bg-card rounded-xl shadow-lg ring-1 ring-black/5">
//               <BillingTable />
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Page;