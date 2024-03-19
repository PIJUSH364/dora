import useClickOutside from '@/src/useClickOutside';
import React from 'react'

export default function ProjectModal({ children, setIsOpen }) {
    let domNode = useClickOutside(() => {
        setIsOpen(false)

    });
    return (
        <>
            <div className="mfp-bg mfp-fade dora-popup mfp-ready" />
            <div
                className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade dora-popup mfp-ready"
                tabIndex={-1}
                style={{ overflow: "hidden auto", }}
            >
                <div className="mfp-container mfp-s-ready mfp-inline-holder rounded-md" >
                    <div className="mfp-content rounded-md" ref={domNode} style={{ width: "60%" }}>
                        <div className="mfp-fade p-16 rounded-md bg-red-50 ">
                            {children}
                            <button
                                title="Close (Esc)"
                                type="button"
                                className="mfp-close"
                                onClick={() => setIsOpen(false)}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                    <div className="mfp-preloader">Loading...</div>
                </div>
            </div>
        </>
    )
}
