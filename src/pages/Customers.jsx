import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: "Ayu Sara",
      email: "ayu@gmail.com",
      phone: "08123456789",
    },
    {
      id: 2,
      name: "Budi Santoso",
      email: "budi@gmail.com",
      phone: "08129876543",
    },
  ];

  return (
    <div
      className="
      min-h-screen
      bg-[#f5f7fb]
      p-4
      sm:p-6
      lg:p-8
      "
    >
      {/* Header */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        sm:justify-between
        sm:items-center
        gap-4
        mb-6
        "
      >
        <div>
          <p
            className="
          text-sm
          text-gray-400
          "
          >
            Customer Data
          </p>

          <h1
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-gray-800
            "
          >
            Customer Management
          </h1>
        </div>

        {/* Add Customer Dialog */}

        <Dialog>
          <DialogTrigger
            className="
            w-full
            sm:w-auto
            bg-[#6C63FF]
            text-white
            px-5
            py-2.5
            rounded-xl
            hover:bg-[#5a52e0]
            transition
            text-sm
            "
          >
            + Add Customer
          </DialogTrigger>

          <DialogContent
            className="
            w-[90%]
            sm:max-w-md
            "
          >
            <DialogHeader>
              <DialogTitle>Add New Customer</DialogTitle>
            </DialogHeader>

            <div
              className="
              space-y-4
              mt-4
              "
            >
              <Input placeholder="Customer Name" />

              <Input placeholder="Email" type="email" />

              <Input placeholder="Phone Number" />

              <button
                className="
                w-full
                bg-[#6C63FF]
                text-white
                py-2.5
                rounded-xl
                hover:bg-[#5a52e0]
                "
              >
                Save Customer
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}

      <div
        className="
        bg-white
        rounded-2xl
        shadow-sm
        p-4
        sm:p-6
        "
      >
        {/* responsive table wrapper */}

        <div className="overflow-x-auto">
          <Table
            className="
            min-w-[600px]
            "
          >
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>

                <TableHead>Nama</TableHead>

                <TableHead>Email</TableHead>

                <TableHead>No HP</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>

                  <TableCell
                    className="
                      font-medium
                      "
                  >
                    {customer.name}
                  </TableCell>

                  <TableCell>{customer.email}</TableCell>

                  <TableCell>{customer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
