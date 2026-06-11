import React from "react";
import {
  Activity,
  Shield,
  Sparkles,
  Heart,
  Check,
  Coffee,
  Smile,
  Users,
  Instagram,
  MapPin,
  Phone,
  HelpCircle,
  Plus,
  Minus,
  Edit3,
  X,
  Save,
  Trash2,
  Globe,
  Menu,
  ChevronDown,
  ExternalLink,
  Info,
  Clock,
  Compass,
  Home,
  Star,
  RefreshCw,
  Eye,
  FileText
} from "lucide-react";

interface IconMapperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconMapper: React.FC<IconMapperProps> = ({ name, className = "", size = 20 }) => {
  switch (name) {
    case "Activity":
      return <Activity className={className} size={size} />;
    case "Shield":
      return <Shield className={className} size={size} />;
    case "Sparkles":
      return <Sparkles className={className} size={size} />;
    case "Heart":
      return <Heart className={className} size={size} />;
    case "Check":
      return <Check className={className} size={size} />;
    case "Coffee":
      return <Coffee className={className} size={size} />;
    case "Smile":
      return <Smile className={className} size={size} />;
    case "Users":
      return <Users className={className} size={size} />;
    case "Instagram":
      return <Instagram className={className} size={size} />;
    case "MapPin":
      return <MapPin className={className} size={size} />;
    case "Phone":
      return <Phone className={className} size={size} />;
    case "HelpCircle":
      return <HelpCircle className={className} size={size} />;
    case "Plus":
      return <Plus className={className} size={size} />;
    case "Minus":
      return <Minus className={className} size={size} />;
    case "Edit3":
      return <Edit3 className={className} size={size} />;
    case "X":
      return <X className={className} size={size} />;
    case "Save":
      return <Save className={className} size={size} />;
    case "Trash2":
      return <Trash2 className={className} size={size} />;
    case "Globe":
      return <Globe className={className} size={size} />;
    case "Menu":
      return <Menu className={className} size={size} />;
    case "ChevronDown":
      return <ChevronDown className={className} size={size} />;
    case "ExternalLink":
      return <ExternalLink className={className} size={size} />;
    case "Info":
      return <Info className={className} size={size} />;
    case "Clock":
      return <Clock className={className} size={size} />;
    case "Compass":
      return <Compass className={className} size={size} />;
    case "Home":
      return <Home className={className} size={size} />;
    case "Star":
      return <Star className={className} size={size} />;
    case "RefreshCw":
      return <RefreshCw className={className} size={size} />;
    case "Eye":
      return <Eye className={className} size={size} />;
    case "FileText":
      return <FileText className={className} size={size} />;
    default:
      return <Sparkles className={className} size={size} />;
  }
};
