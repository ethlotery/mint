
import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../stores/hooks'
import { selectMint, setErrorMessage, setSoldOut } from '../stores/mint-slice'
import { CONTRACT_ADDRESS } from '../utils/constants'
import ETHLottery from '../utils/ETHLottery.json'
import { ethers } from 'ethers'

const Ball = () => {
  const dispatch = useAppDispatch()
  const { errorMessage } = useAppSelector(selectMint)
  const [ballonVisible, setBallonVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [check, setCheck] = useState(0)

  useEffect(() => {
      const watchSupplyFunction = async () => {
        const { ethereum } = window;

        if (!ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner()
          const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, ETHLottery.abi, signer)
          let minted = await connectedContract.totalSupply()
          let maxSupply = await connectedContract.MAX_SUPPLY()

          if (minted === maxSupply) {
            dispatch(setSoldOut(true))
          }
        }
      }

      const id = setInterval(async () => {
          await watchSupplyFunction()
          setCheck(check + 1)
      }, 3000);

      return () => clearInterval(id);
  }, [check, dispatch])

  return (
  <><div className="wrap">
      <section className="stage">
        <figure className="ball">
          <span className="number" data-number="?">&nbsp;</span>
        </figure>
      </section>
    </div>

<style jsx>{`
.ball {
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 50%;
  position: relative;
  background: radial-gradient(circle at 50% 40%, #fcfcfc, #efeff1 66%, #9b5050 100%);
  overflow: hidden;
  animation: ballGrow 2s ease-out forwards;
  transform: scale(0.5);
}
.ball:after {
  content: "";
  position: absolute;
  top: 5%;
  left: 10%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
  -webkit-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
  -moz-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
  -ms-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
  -o-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
  transform: translateX(-80px) translateY(-90px) skewX(-20deg);
}

.stage {
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  -ms-perspective: 1200px;
  -o-perspective: 1200px;
  perspective: 1200px;
  -webkit-perspective-origin: 50% 50%;
  -moz-perspective-origin: 50% 50%;
  -ms-perspective-origin: 50% 50%;
  -o-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
}

.number {
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 300px;
  font-size: 160px;
  color: blue;
  font-family: 'Roboto', sans-serif;
  animation: ballRoll 2s ease-out;
}

.number:after {
  content: attr(data-number);
  position: absolute;
  transform: translateX(-75%);
  opacity: 0;
  animation: numberReveal 0.1s 1.5s reverse forwards;
}

.number:before {
  content: '?';
  position: absolute;
  transform: translateX(-25%);
  animation: numberReveal 0.1s 1.5s forwards;
}

@keyframes ballRoll {
  0%, 20%, 50% {
    opacity: 1;
    transform: translateY(0) rotateX(0) scale(1);
  }
  10%, 35%, 75% {
    transform: translateY(100%) rotateX(170deg) scale(0.4);
  }
  11%, 36%, 76% {
    transform: translateY(-100%) rotateX(-170deg) scale(0.3);
    opacity: 0;
  }

}

@keyframes ballGrow {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes numberReveal {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


.stage:nth-child(2) .ball,
.stage:nth-child(2) .number {
  animation-delay: 0.3s;
}

.stage:nth-child(2) .number:after,
.stage:nth-child(2) .number:before {
  animation-delay: 1.8s;
}

.stage:nth-child(3) .ball,
.stage:nth-child(3) .number {
  animation-delay: 0.6s;
}

.stage:nth-child(3) .number:after,
.stage:nth-child(3) .number:before {
  animation-delay: 2.1s;
}

.stage:nth-child(4) .ball,
.stage:nth-child(4) .number {
  animation-delay: 0.9s;
}

.stage:nth-child(4) .number:after,
.stage:nth-child(4) .number:before {
  animation-delay: 2.4s;
}

`}</style>
      </>
  )
}

export default Ball
