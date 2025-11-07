import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Order } from "../types";
import { StatusBadge } from "./StatusBadge";
import PackageIcon from "@/components/icons/PackageIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

interface RecentOrdersTableProps {
  orders: Order[];
}

export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
  return (
    <Card className="border-border">
      <CardHeader className="px-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PackageIcon width={20} height={20} color="#0f1d23" />
            <h2 className="heading-sm">Recent Orders</h2>
          </div>
          <Link 
            href="/orders" 
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
              <TableHead className="body-sm-medium text-(--neutral-100) px-6">Order ID</TableHead>
              <TableHead className="body-sm-medium text-(--neutral-100)">Customer</TableHead>
              <TableHead className="body-sm-medium text-(--neutral-100)">Total</TableHead>
              <TableHead className="body-sm-medium text-(--neutral-100)">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow 
                key={order.orderId}
                className={cn(
                  "border-b border-(--neutral-20)",
                  index === orders.length - 1 && "border-b-0"
                )}
              >
                <TableCell className="px-6">
                  <Link 
                    href={`/orders/${order.orderId.replace('#', '')}`}
                    className="flex items-center gap-1 body-sm-medium text-(--purple) hover:text-(--purple)/80 transition-colors"
                  >
                    {order.orderId}
                    <ExternalLinkIcon width={12} height={12} color="#5f47f6" />
                  </Link>
                </TableCell>
                <TableCell className="body-sm text-(--purple)">{order.customer}</TableCell>
                <TableCell className="body-sm text-(--neutral-100)">{order.total}</TableCell>
                <TableCell>
                  <StatusBadge status={order.status} />
                </TableCell>
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