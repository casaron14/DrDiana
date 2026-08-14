// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle menu on button click
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }

    // Close menu when a link is clicked
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function () {
                if (menuToggle) menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = event.target.closest('.navbar');
        if (!isClickInside && navLinks && navLinks.classList.contains('active')) {
            if (menuToggle) menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // vCard Generation
    const vcardBtn = document.getElementById('vcardBtn');
    if (vcardBtn) {
        vcardBtn.addEventListener('click', function (e) {
            e.preventDefault();
            generateVCard();
        });
    }

    // Social Media Links
    const whatsappIcon = document.querySelector('.whatsapp-icon');
    const instagramIcon = document.querySelector('.instagram-icon');

    if (whatsappIcon) {
        // Update with actual phone number (format: +country code phone number, no spaces/dashes)\n        whatsappIcon.href = 'https://wa.me/255XXXXXXXXX?text=Hello%20Dr.%20Diana'; // Replace with actual number
        whatsappIcon.target = '_blank';
        whatsappIcon.rel = 'noopener noreferrer';
    }

    if (instagramIcon) {
        // Update with actual Instagram handle
        instagramIcon.href = 'https://instagram.com/inkryptus_ibo'; // Replace with actual handle
        instagramIcon.target = '_blank';
        instagramIcon.rel = 'noopener noreferrer';
    }
});

// Generate vCard function
function generateVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Dr. Diana Besha
N:Besha;Diana
ORG:Inkryptus IBO
TITLE:Founder & CEO
ADRTYPE:WORK
ADR:;;Tanzania
EMAIL:contact@example.com
TEL;TYPE=WORK,VOICE:+255XXXXXXXXX
TEL;TYPE=CELL:+255XXXXXXXXX
URL:https://example.com
NOTE:Based in Tanzania
END:VCARD`;

    // Create blob and download
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Dr_Diana_Besha.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
