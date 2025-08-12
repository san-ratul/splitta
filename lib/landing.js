import { Bell, CreditCard, PieChart, Receipt, Users } from "lucide-react";

export const FEATURES = [
  {
    title: "Organized Group Spending",
    Icon: Users,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Form groups for flatmates, trips, or special occasions to keep expenses sorted and transparent.",
  },
  {
    title: "Optimized Settlements",
    Icon: CreditCard,
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Our smart algorithm reduces the number of transactions needed when settling balances.",
  },
  {
    title: "Insightful Analytics",
    Icon: PieChart,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Visualize where the money goes and uncover patterns in your shared expenses.",
  },
  {
    title: "Smart Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description:
      "Never forget a due again—get timely nudges about pending payments and spending activity.",
  },
  {
    title: "Flexible Splitting Options",
    Icon: Receipt,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Split costs evenly, by percentage, or custom amounts — tailored to every situation.",
  },
  {
    title: "Live Expense Sync",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v8M15 14v8M9 2v6M15 2v6" />
      </svg>
    ),
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Stay in the loop instantly—see expenses and repayments as they’re added by others.",
  },
];

export const STEPS = [
  {
    label: "1",
    title: "Start or Join a Group",
    description:
      "Create a group for your friends, trip crew, or roommates and bring everyone together.",
  },
  {
    label: "2",
    title: "Log Shared Costs",
    description:
      "Note who paid and decide how to divide the cost among group members.",
  },
  {
    label: "3",
    title: "Balance and Settle",
    description:
      "Check who owes what and record payments as debts are paid off.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Babu Rao style ka account keeping! With Splitta, I finally stopped mixing up who paid for chai and who didn't!",
    name: "Babu Rao",
    image: "/testimonials/babubhaiya.png",
    role: "Landlord & Finance Guru",
  },
  {
    quote:
      "Splitta's maths is sharper than my money-doubling plans! No more fights over petty cash.",
    name: "Raju",
    image: "/testimonials/raju.jpg",
    role: "Investment Specialist",
  },
  {
    quote:
      "Now that I have Splitta, Raju can’t cheat me out of shoes or jackets. Every rupee counts now!",
    name: "Shyam",
    image: "/testimonials/shyam.png",
    role: "Full-Time Hustler",
  },
];
