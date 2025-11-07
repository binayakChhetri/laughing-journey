import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { TopCustomer } from "../types";
import UserIcon from "@/components/icons/UserIcon";

interface TopCustomersTableProps {
  customers: TopCustomer[];
}

export function TopCustomersTable({ customers }: TopCustomersTableProps) {
  return (
    <Card className="border-border">
      <CardHeader className="px-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserIcon width={16} height={16} color="#0f1d23" />
            <h2 className="heading-sm">Top Customers</h2>
          </div>
          <Link 
            href="/customers" 
            className="body-sm-medium text-(--purple) underline hover:text-(--purple)/80 transition-colors"
          >
            View all
          </Link>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-(--neutral-20)">
              <TableHead className="body-sm-medium text-(--neutral-100) px-6">S.N</TableHead>
              <TableHead className="body-sm-medium text-(--neutral-100)">Customer</TableHead>
              <TableHead className="body-sm-medium text-(--neutral-100) text-right pr-6">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer, index) => (
              <TableRow 
                key={customer.rank}
                className={cn(
                  "border-b border-(--neutral-20)",
                  index === customers.length - 1 && "border-b-0"
                )}
              >
                <TableCell className="body-sm text-(--neutral-60) px-6">{customer.rank}</TableCell>
                <TableCell className="body-sm text-(--purple)">{customer.name}</TableCell>
                <TableCell className="body-sm text-(--neutral-100) text-right pr-6">{customer.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}