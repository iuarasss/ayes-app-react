import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import Icon from "../components/Icon";

import Header from "../components/Header";
import Container from "../components/Container";
import Grid from "../components/Grid";

import SearchInput from "../components/SearchInput";
import Input from "../components/Input";
import ActionButton from "../components/ActionButton";

import ProgressBar from "../components/ProgressBar";
import StatisticCard from "../components/StatisticCard";
import TaskCard from "../components/TaskCard";
import BookingTable from "../components/BookingTable";

import SectionTitle from "../components/SectionTitle";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import EmptyState from "../components/EmptyState";
import NotificationCard from "../components/NotificationCard";

import { Bell } from "lucide-react";

export default function Components() {
  return (
    <Container>

      <SectionTitle
        title="Components Library"
        subtitle="Travel Agent Dashboard"
      />

      {/* HEADER */}
      <Card>
        <SectionHeader
          title="Header Component"
          subtitle="Header dashboard"
        />

        <Header />
      </Card>

      {/* BASIC COMPONENT */}
      <Card className="mt-6">
        <SectionHeader
          title="Basic Components"
          subtitle="Button, Badge, Avatar, Icon"
        />

        <div className="flex flex-wrap gap-4 items-center">
          <Button>Login</Button>

          <Badge type="success">
            Success
          </Badge>

          <Badge type="warning">
            Pending
          </Badge>

          <Avatar src="https://i.pravatar.cc/100" />

          <Icon icon={Bell} />
        </div>
      </Card>

      {/* FORM COMPONENT */}
      <Card className="mt-6">
        <SectionHeader
          title="Form Components"
          subtitle="Search, Input, Action Button"
        />

        <div className="max-w-md space-y-4">

          <SearchInput />

          <Input
            placeholder="Enter your name..."
          />

          <ActionButton>
            Submit
          </ActionButton>

        </div>
      </Card>

      {/* PROGRESS BAR */}
      <Card className="mt-6">
        <SectionHeader
          title="Progress Bar"
          subtitle="Progress indicator"
        />

        <ProgressBar value={75} />
      </Card>

      {/* STATISTIC CARD */}
      <div className="mt-6">

        <SectionHeader
          title="Statistic Cards"
          subtitle="Dashboard summary"
        />

        <Grid>

          <StatisticCard
            title="Revenue"
            value="$18,680"
            progress={75}
          />

          <StatisticCard
            title="Customers"
            value="2,450"
            progress={60}
          />

          <StatisticCard
            title="Trips"
            value="320"
            progress={85}
          />

          <StatisticCard
            title="Bookings"
            value="1,240"
            progress={70}
          />

        </Grid>

      </div>

      {/* TASK CARD */}
      <div className="mt-8">

        <SectionHeader
          title="Task Cards"
          subtitle="Pending tasks"
        />

        <div className="grid md:grid-cols-2 gap-6">

          <TaskCard
            title="Pending Approval"
            amount="$1,200"
            buttonText="Approve"
          />

          <TaskCard
            title="Unreported Advances"
            amount="$2,132"
            buttonText="Details"
          />

        </div>

      </div>

      {/* NOTIFICATION */}
      <Card className="mt-8">

        <SectionHeader
          title="Notification Card"
          subtitle="User notifications"
        />

        <div className="space-y-4">

          <NotificationCard
            title="New Booking"
            message="Customer booked Bali Adventure."
          />

          <NotificationCard
            title="Payment Received"
            message="Payment successfully verified."
          />

        </div>

      </Card>

      {/* EMPTY STATE */}
      <Card className="mt-8">

        <SectionHeader
          title="Empty State"
          subtitle="Display when no data"
        />

        <EmptyState />

      </Card>

      {/* BOOKING TABLE */}
      <Card className="mt-8">

        <SectionHeader
          title="Booking Table"
          subtitle="Recent bookings"
        />

        <BookingTable />

      </Card>

    </Container>
  );
}