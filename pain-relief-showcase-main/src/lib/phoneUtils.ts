/**
 * Utility functions for handling phone numbers and phone-related functionality
 */

// Format phone number for display
const formatPhoneNumber = (phoneNumber: string): string => {
  // Format as +91 99013 60073
  const cleaned = phoneNumber.replace(/\D/g, '');
  if (cleaned.length === 10) return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  if (cleaned.length === 12) return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 7)} ${cleaned.slice(7)}`;
  return phoneNumber; // Return as is if format doesn't match
};

// Get tel: link for phone numbers
const getTelLink = (phoneNumber: string): string => {
  // Remove all non-numeric characters except leading +
  const cleaned = phoneNumber.replace(/^\+/, '').replace(/\D/g, '');
  return `tel:+${cleaned}`;
};

// Get WhatsApp link with pre-filled message
const getWhatsAppLink = (phoneNumber: string, message: string = ''): string => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleaned}${message ? `?text=${encodedMessage}` : ''}`;
};

// Handle phone number click with fallback for desktop
const handlePhoneClick = (phoneNumber: string): void => {
  // For mobile devices, the tel: link will work natively
  // For desktop, we'll try to open the default phone app
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Mobile device - let the tel: link handle it
    return;
  }
  
  // Desktop - show a dialog with options
  const shouldCall = window.confirm(`Would you like to call ${formatPhoneNumber(phoneNumber)}?`);
  if (shouldCall) {
    window.location.href = getTelLink(phoneNumber);
  }
};

// Phone number configuration
const PHONE_CONFIG = {
  primaryNumber: '+91 99013 60073',
  formattedPrimary: '+91 99013 60073',
  telLink: 'tel:+919901360073',
  whatsappLink: 'https://wa.me/919901360073?text=Hello%20Dr.%20Dwayne,%20I%20would%20like%20to%20book%20a%20home%20visit%20for%20physiotherapy.'
};

export {
  formatPhoneNumber,
  getTelLink,
  getWhatsAppLink,
  handlePhoneClick,
  PHONE_CONFIG
};
