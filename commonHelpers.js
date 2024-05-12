import{S as c,i as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="43838996-7b0b384f174ce1ebbbcd3455e",p="https://pixabay.com/api/";function y(l){const s=new URLSearchParams({key:u,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(l){return l.map(({tags:s,likes:r,views:a,comments:e,downloads:t,largeImageURL:o})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-img" src="${o}" alt="${s}">
            <div class="info-gallery-box">
              <ul class="info-gallery-list">
                <li class="info-gallery-item">
                  <p class="info-gallery-text">Likes</p>
                  <span class="info-gallery-span">${r}</span>
                </li>
                <li class="info-gallery-item">
                  <p class="info-gallery-text">Views</p>
                  <span class="info-gallery-span">${a}</span>
                </li>
                <li class="info-gallery-item">
                  <p class="info-gallery-text">Comments</p>
                  <span class="info-gallery-span">${e}</span>
                </li>
                <li class="info-gallery-item">
                  <p class="info-gallery-text">Downloads</p>
                  <span class="info-gallery-span">${t}</span>
                </li>
              </ul>
            </div>
          </a>
        </li>`).join("")}const g=document.querySelector(".form"),i=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=new c(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",h);function h(l){l.preventDefault();const s=l.currentTarget.elements.search.value.trim();n.classList.remove("is-hidden"),i.innerHTML="",y(s).then(r=>{if(s===""||r.hits.length===0)return f.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3});i.innerHTML=m(r.hits),d.refresh()}).catch(r=>console.log(r)).finally(()=>{l.target.reset(),n.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
