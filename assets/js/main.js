/* =========================================================
   Hale ilima — Main JS
   by AKASHIKI
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Header scroll shrink ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    const toggleNav = () => {
      hamburger.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open');
      const isOpen = mobileNav.classList.contains('is-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    hamburger.addEventListener('click', toggleNav);

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileNav.classList.contains('is-open')) toggleNav();
      });
    });
  }

  /* ---------- IntersectionObserver: scroll reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- FAQ accordion ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const q = item.querySelector('.faq-item__q');
    const aWrap = item.querySelector('.faq-item__a-wrap');
    if (!q || !aWrap) return;

    q.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        aWrap.style.maxHeight = aWrap.scrollHeight + 'px';
      } else {
        aWrap.style.maxHeight = '0px';
      }
    });
  });

  /* ---------- Reservation tab switcher ---------- */
  const reservationTabs = document.querySelectorAll('.reservation-tab');
  const reservationPanels = document.querySelectorAll('.reservation-tabpanel');
  if (reservationTabs.length && reservationPanels.length) {
    reservationTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        if (!target) return;

        reservationTabs.forEach((t) => {
          const active = t === tab;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        reservationPanels.forEach((p) => {
          const active = p.getAttribute('data-panel') === target;
          p.classList.toggle('is-active', active);
          if (active) {
            p.removeAttribute('hidden');
          } else {
            p.setAttribute('hidden', '');
          }
        });
      });
    });
  }

  /* ---------- Smooth anchor scroll with header offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerOffset = (header && header.classList.contains('is-scrolled')) ? 60 : 76;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* =========================================================
     COPY GUARD — Layer 4: Right-click + shortcut blocking
     ========================================================= */
  const guardMessage = '本ページはサンプルです。この操作は無効化されています。';

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('本ページはサンプルです。右クリックは無効化されています。');
  });

  document.addEventListener('keydown', (e) => {
    const key = e.key;
    const isF12 = key === 'F12';
    const ctrl = e.ctrlKey || e.metaKey;
    const blockCtrlKey = ctrl && !e.shiftKey && ['u', 'U', 's', 'S', 'p', 'P'].includes(key);
    const blockCtrlC = ctrl && !e.shiftKey && (key === 'c' || key === 'C');
    const blockDevTools =
      ctrl && e.shiftKey && ['i', 'I', 'j', 'J', 'c', 'C'].includes(key);

    if (isF12 || blockCtrlKey || blockCtrlC || blockDevTools) {
      e.preventDefault();
      e.stopPropagation();
      alert(guardMessage);
      return false;
    }
  });

  /* ---------- Block drag, copy, cut events ---------- */
  ['copy', 'cut', 'dragstart', 'selectstart'].forEach((evt) => {
    document.addEventListener(evt, (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      e.preventDefault();
    });
  });

  /* ---------- Block image drag specifically ---------- */
  document.addEventListener('dragstart', (e) => {
    if (e.target && e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });
})();
