import { Dispatch, SetStateAction } from "react";

// Base state types
export interface ModalState {
  isModalOpen: boolean;
  modalImage: string;
}

export interface SidebarState {
  isSidebarOpen: boolean;
}

// State setters types
export interface ModalStateSetters {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalImage: Dispatch<SetStateAction<string>>;
}

export interface SidebarStateSetter {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

// Combined state types
export interface ModalStateProps extends ModalState, ModalStateSetters {}
export interface SidebarStateProps extends SidebarState, SidebarStateSetter {}

// Component Props
export interface SideBarProps extends SidebarStateProps, ModalStateProps {}

export interface HomeProps extends SidebarStateProps, ModalStateProps {}

export interface ToggleBtnProps extends SidebarStateProps {}

export interface FooterProps extends SidebarState {}

// Modal component props
export interface ModalProps {
  image: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
