export function StationeryScene() {
  return (
    <div
      role="img"
      aria-label="An olive notebook, cream writing paper, a pencil, and terracotta envelopes arranged on a sage desktop"
      className="relative isolate aspect-square overflow-hidden bg-scene text-ink lg:aspect-[6/5]"
    >
      <div className="absolute inset-0 bg-linear-to-br from-card/30 via-transparent to-ink/10" />
      <div className="absolute top-[16%] -right-[4%] h-[67%] w-[50%] rotate-[14deg] border border-ink/10 bg-clay shadow-xl">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-paper/20 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
      </div>
      <div
        className="absolute top-[14%] left-[20%] h-[70%] w-[48%] -rotate-[13deg]
          rounded-r-control border-l-8 border-ink/15 bg-sage shadow-xl"
      >
        <div className="absolute inset-y-0 left-1 w-px bg-ink/15" />
        <div className="absolute inset-x-0 top-[22%] text-center">
          <span className="text-xs tracking-[0.3em]">PAPER & FORM</span>
          <p className="mt-4 font-heading text-3xl">
            Room for
            <br />a little wonder.
          </p>
          <span className="mt-6 inline-block text-xs tracking-widest">
            NOTES · THOUGHTS · IDEAS
          </span>
        </div>
        <span className="absolute inset-x-0 bottom-8 text-center text-xs tracking-[0.3em]">
          NO. 01
        </span>
      </div>
      <div
        className="absolute right-[3%] bottom-[9%] flex h-[42%] w-[39%] rotate-[8deg]
          flex-col justify-center bg-paper px-6 text-center shadow-lg"
      >
        <span className="font-heading text-4xl italic">
          a small
          <br />
          hello.
        </span>
        <span className="mt-4 text-xs tracking-widest">GOES A LONG WAY</span>
      </div>
      <div
        className="absolute top-[9%] right-[22%] h-[74%] w-2 rotate-[24deg]
          rounded-t-full bg-ink shadow-lg after:absolute after:-bottom-4 after:h-4
          after:w-2 after:bg-accent after:[clip-path:polygon(0_0,100%_0,50%_100%)]"
      />
      <div className="absolute top-[9%] left-[10%] h-12 w-6 rotate-[24deg] rounded-full border-2 border-accent shadow-sm" />
      <div className="absolute right-6 bottom-6 rounded-full border border-ink/30 px-4 py-2 text-xs tracking-wider">
        MADE FOR THE EVERYDAY
      </div>
    </div>
  );
}
