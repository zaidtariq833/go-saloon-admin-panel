import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PaymentIcon from "@mui/icons-material/Payment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { CategoryOutlined, ReviewsOutlined } from "@mui/icons-material";

export const main_navigation = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    label: "User Management",
    icon: PeopleIcon,
  },
  {
    label: "Service Management",
    icon: CategoryOutlined,
  },
  {
    label: "Booking Management",
    icon: BookOnlineIcon,
  },
  {
    label: "Transactions",
    icon: PaymentIcon,
  },
  {
    label: "Reviews & Ratings",
    icon: ReviewsOutlined,
  },
  {
    label: "Reports",
    icon: AssessmentIcon,
  },
];
